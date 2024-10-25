'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var CodeMirror = _interopDefault(require('codemirror'));
var Vue$1 = _interopDefault(require('vue/dist/vue.common'));

var index = function (target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

var assign = Object.assign || index;

var DEFAULT_OPTIONS = {
  lineNumbers: true,
  mode: 'text/x-vue',
  theme: 'material',
  tabSize: 2
};

var Editor = {
  name: 'VueCodeMirror',

  props: ['value', 'options'],

  render: function render (h) {
    return h('div', null, [
      h('textarea', { ref: 'textarea' }, this.value)
    ])
  },

  mounted: function mounted () {
    this.currentOptions = assign({}, DEFAULT_OPTIONS, this.options);
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, this.currentOptions);
    this.editor.on('change', this.handleChange);
  },

  watch: {
    value: function value (val) {
      val !== this.editor.getValue() && this.editor.setValue(val);
    }
  },

  methods: {
    handleChange: function handleChange () {
      /* istanbul ignore next */
      this.$emit('change', this.editor.getValue());
    }
  }
};

var Preview = {
  name: 'preview',

  props: ['value', 'styles', 'keepData'],

  render: function render (h) {
    this.className = 'vuep-scoped-' + this._uid;

    return h('div', {
      class: this.className
    }, [
      this.scopedStyle ? h('style', null, this.scopedStyle) : ''
    ])
  },

  computed: {
    scopedStyle: function scopedStyle () {
      return this.styles
        ? insertScope(this.styles, ("." + (this.className)))
        : ''
    }
  },

  mounted: function mounted () {
    this.$watch('value', this.renderCode, { immediate: true });
  },

  methods: {
    renderCode: function renderCode (val) {
      var this$1 = this;

      var lastData = this.keepData && this.codeVM && assign({}, this.codeVM.$data);

      if (this.codeVM) {
        this.codeVM.$destroy();
        this.$el.removeChild(this.codeVM.$el);
      }

      this.codeEl = document.createElement('div');
      this.$el.appendChild(this.codeEl);

      try {
        var parent = this;
        this.codeVM = new Vue$1(assign({}, {parent: parent}, val)).$mount(this.codeEl);

        if (lastData) {
          for (var key in lastData) {
            this$1.codeVM[key] = lastData[key];
          }
        }
      } catch (e) {
        /* istanbul ignore next */
        this.$emit('error', e);
      }
    }
  }
};

function insertScope (style, scope) {
  var regex = /(^|\})\s*([^{]+)/g;
  return style.trim().replace(regex, function (m, g1, g2) {
    return g1 ? (g1 + " " + scope + " " + g2) : (scope + " " + g2)
  })
}

var SPLIT_SIGN = '@!@';
var DEFAULT_REPLICE_LIST = [
  { from: '<template>', to: SPLIT_SIGN + '<template>' },
  { from: '</template>', to: '</template>' + SPLIT_SIGN },
  { from: '<template>', to: '<div id="app">' },
  { from: '</template>', to: '</div>' },
  { from: '<style>', to: '' },
  { from: '</style>', to: '' },
  { from: '<script>', to: '' },
  { from: 'export default {', to: 'new Vue({\n    el: \'#app\',\n' },
  { from: '\n<\/script>', to: ')' }
];

var Jsfiddle = {
  props: {
    value: String
  },
  computed: {
    content: function content (ref) {
      var value = ref.value;
      var getContent = ref.getContent;

      return getContent(value)
    }
  },
  methods: {
    getContent: function getContent (value) {
      var post = value;
      var resource = post.match(/\[_(.*)_]/g);
      var reso = window.VUEP_RESOURCE && window.VUEP_RESOURCE.join(',') || '';
      if (resource) {
        var s = resource[0].replace(/(\[_|_]|\s)/g, '');
        reso = [reso, s].join(',');
      }
      var replaceList = window.VUEP_REPLICE_LIST || DEFAULT_REPLICE_LIST;
      var sign = window.SIGN || SPLIT_SIGN;
      replaceList.forEach(function (ref) {
        var from = ref.from;
        var to = ref.to;

        post = post.replace(from, to);
      });
      post = post.split(sign).map(function (item) { return item.replace(/^\n+/gm, ''); });
      post[6] = post[1];
      var codepenExtra = [];
      if (window.VUEP_FORM_RESOURCE) {
        post[1] = (window.VUEP_FORM_RESOURCE.join('\n')) + "\n" + (post[1]);
        codepenExtra = window.VUEP_FORM_RESOURCE.map(function (item) {
          if (!item.indexOf('<script')) {
            return item.match(/<script src="(.*)"><(\\)?\/script>/)[1]
          }
          if (!item.indexOf('<link')) {
            return item.match(/<link rel="stylesheet" href="(.*)">/)[1]
          }
        });
      }
      post[1] = post[1].replace(/<!-- \[_(.*)_] -->/, '');
      post[2] = this.getFormat(post[2]);
      post[3] = reso;
      post[4] = '';
      post[5] = '';
      var resoArr = reso.split(',');
      if (codepenExtra.length) { resoArr = resoArr.concat(codepenExtra); }
      resoArr.forEach(function (item) {
        if (/\.js$/.test(item)) { post[4] += item + ";"; }
        if (/\.css$/.test(item)) { post[5] += item + ";"; }
      });
      return post
    },
    getFormat: function getFormat (str) {
      var indent = 0;
      Array.prototype.some.call(str, function (s) {
        if (s !== ' ') { return true }
        indent++;
      });
      var reg = new RegExp(("^(\\s{0," + indent + "}|[\\n])"), 'gm');
      return str.replace(reg, '')
    }
  },
  render: function render (h) {
    /* eslint-disable camelcase */
    var codepenData = JSON.stringify({
      css: this.content[0],
      html: this.content[6],
      js: this.content[2],
      js_external: this.content[4],
      css_external: this.content[5],
      layout: window.VUEP_CODEPEN_LAYOUT || 'left',
      js_pre_processor: window.VUEP_CODEPEN_JS_PROCESSOR || 'babel',
      editors: window.VUEP_CODEPEN_EDITORS || '101'
    });
    return h('div', {
      staticClass: 'vuep-out-link'
    }, [h('form', {
      staticClass: 'vuep-jsfiddle',
      domProps: {
        target: '_blank',
        action: 'https://jsfiddle.net/api/post/library/pure/',
        method: 'post'
      }
    }, [
      h('input', { domProps: { type: 'hidden', name: 'css', value: this.content[0] }}),
      h('input', { domProps: { type: 'hidden', name: 'html', value: this.content[1] }}),
      h('input', { domProps: { type: 'hidden', name: 'panel_js', value: 3 }}),
      h('input', { domProps: { type: 'hidden', name: 'wrap', value: 1 }}),
      h('input', { domProps: { type: 'hidden', name: 'js', value: this.content[2] }}),
      h('input', { domProps: { type: 'hidden', name: 'resources', value: this.content[3] }}),
      h('button', 'JSFiddle')
    ]), h('form', {
      staticClass: 'vuep-codepen',
      domProps: {
        target: '_blank',
        action: 'https://codepen.io/pen/define',
        method: 'post'
      }
    }, [
      h('input', { domProps: { type: 'hidden', name: 'data', value: codepenData }}),
      h('button', 'Codepen')
    ])])
  }
};

var parser = function (input) {
  var html = document.createElement('div');
  var content = html.innerHTML = input.trim();

  try {
    var template = html.querySelector('template');
    var script = html.querySelector('script');
    var styles = Array.prototype.slice.call(html.querySelectorAll('style')).map(function (n) { return n.innerHTML; });

    if (!template && !script && !styles.length) {
      return {
        content: content,
        script: content
      }
    }

    return {
      content: /<\/script>$/g.test(content) ? content : (content + '\n</script>'),
      template: template ? template.innerHTML : '',
      script: script ? script.innerHTML : '',
      styles: styles
    }
  } catch (error) {
    /* istanbul ignore next */
    return { error: error }
  }
};

var JSMODULE_REG = /\.((js)|(jsx))$/;

function require$1 (url) {
  if (JSMODULE_REG.test(url)) {
    return getAndCache(url)
  }
}

// modify from docsify: https://github.com/QingWei-Li/docsify/blob/master/src/core/fetch/ajax.js

var cache = {};

/**
 * Simple ajax get
 * @param {string} url
 * @return { then(resolve, reject), abort }
 */
function getAndCache (url) {
  var xhr = new XMLHttpRequest(); // eslint-disable-line

  if (cache[url]) {
    return cache[url]
  }

  xhr.open('GET', url, false);
  xhr.send();
  var script = xhr.responseText;
  cache[url] = evalJS(script);
  return cache[url]
}

window.require = require$1;

function evalJS (script, scope) {
  if ( scope === void 0 ) scope = {};

  // https://www.npmjs.com/package/babel-standalone
  /* istanbul ignore next */

  if (typeof Babel !== 'undefined') {
    var plugins = [];

    // Register jsx plugin
    if (window['babel-plugin-transform-vue-jsx']) {
      if (!Babel.availablePlugins['transform-vue-jsx']) { // eslint-disable-line
        Babel.registerPlugin('transform-vue-jsx', window['babel-plugin-transform-vue-jsx']); // eslint-disable-line
      }
      plugins.push('transform-vue-jsx');
    }

    script =  Babel.transform(script, { // eslint-disable-line
      presets: [['es2015', { 'loose': true }], 'stage-2'],
      plugins: plugins,
      comments: false
    }).code;
  }

  var scopeDecl = '';
  for (var variable in scope) {
    if (scope.hasOwnProperty(variable)) {
      scopeDecl += 'var ' + variable + ' = __vuep[\'' + variable + '\'];';
    }
  }

  script = "(function(exports){var module={};module.exports=exports;" + scopeDecl + ";" + script + ";return module.exports.__esModule?module.exports.default:module.exports;})({})";
  var result = new Function('__vuep', 'return ' + script)(scope) || {}; // eslint-disable-line
  return result
}

var compiler = function (ref, scope) {
  var template = ref.template;
  var script = ref.script; if ( script === void 0 ) script = 'module.exports={}';
  var styles = ref.styles;
  if ( scope === void 0 ) scope = {};

  try {
    if (script === 'module.exports={}' && !template) { throw Error('no data') }
    var result = evalJS(script, scope);
    if (template) {
      result.template = template;
    }
    return {
      result: result,
      styles: styles && styles.join(' ')
    }
  } catch (error) {
    return { error: error }
  }
};

var Vuep$2 = {
  name: 'Vuep',

  props: {
    template: String,
    options: {},
    keepData: Boolean,
    value: String,
    scope: Object
  },

  data: function data () {
    return {
      content: '',
      preview: '',
      styles: '',
      error: ''
    }
  },

  render: function render (h) {
    var this$1 = this;

    var win;

    /* istanbul ignore next */
    if (this.error) {
      win = h('div', {
        class: 'vuep-error'
      }, [this.error]);
    } else {
      win = h(Preview, {
        class: 'vuep-preview',
        props: {
          value: this.preview,
          styles: this.styles,
          keepData: this.keepData
        },
        on: {
          error: this.handleError
        }
      });
    }
    return h('div', { class: 'vuep' }, [
      h(Editor, {
        class: 'vuep-editor',
        props: {
          value: this.content,
          options: this.options
        },
        on: {
          change: [this.executeCode, function (val) { return this$1.$emit('input', val); }]
        }
      }),
      win,
      h(Jsfiddle, {
        props: {
          value: this.content
        }
      })
    ])
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler (val) {
        val && this.executeCode(val);
      }
    }
  },

  created: function created () {
      /* istanbul ignore next */
    if (this.$isServer) { return }
    var content = this.template;

    if (/^[\.#]/.test(this.template)) {
      var html = document.querySelector(this.template);
      if (!html) { throw Error(((this.template) + " is not found")) }

      /* istanbul ignore next */
      content = html.innerHTML;
    }

    if (content) {
      this.executeCode(content);
      this.$emit('input', content);
    }
  },

  methods: {
    handleError: function handleError (err) {
      /* istanbul ignore next */
      this.error = err;
    },

    executeCode: function executeCode (code) {
      this.error = '';
      var result = parser(code);

      /* istanbul ignore next */
      if (result.error) {
        this.error = result.error.message;
        return
      }

      var compiledCode = compiler(result, this.scope);

      /* istanbul ignore next */
      if (compiledCode.error) {
        this.error = compiledCode.error.message;
        return
      }

      this.content = result.content;
      this.preview = compiledCode.result;
      if (compiledCode.styles) { this.styles = compiledCode.styles; }
    }
  }
};

Vuep$2.config = function (opts) {
  Vuep$2.props.options.default = function () { return opts; };
};

function install (Vue, opts) {
  Vuep$2.config(opts);
  Vue.component(Vuep$2.name, Vuep$2);
}

Vuep$2.install = install;

if (typeof Vue !== 'undefined') {
  Vue.use(install); // eslint-disable-line
}

if (typeof require !== 'undefined') {
  require('codemirror/addon/mode/overlay');
  require('codemirror/addon/mode/simple');
  require('codemirror/mode/css/css');
  require('codemirror/mode/htmlmixed/htmlmixed');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/vue/vue');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/jsx/jsx');
}

module.exports = Vuep$2;
