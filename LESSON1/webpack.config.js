const path = require("path")

/* Свойство entry задаёт главный файл с исходным кодом проекта. 
 * Значение свойства mode указывает на тип окружения для компиляции 
 * (в нашем случае это окружение разработки — development) и на то, 
 * куда нужно поместить скомпилированный файл.
 */

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"), 
    },


    /* Настроим сервер разработки
     *
     * Свойство static объекта с настройками devServer указывает на папку, 
     * в которой расположены наши ресурсы и файл index.html. 
     * Свойство port позволяет задать порт, который будет прослушивать сервер. 
     * Свойство compress позволяет реализовать наблюдение за изменениями файлов в папке, 
     * задаваемой свойством static.
     */

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
}