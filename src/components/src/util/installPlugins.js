export function installPlugins(
    Component,
    plugins,
) {
    return {
        ...Component,
        install(app) {
            app.component(Component.name, Component);
            !!plugins && (plugins.forEach(app.use))
        },
    }
}