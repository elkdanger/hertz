module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        src_files: "**",
        output_dir: "publish/",
        clean: ["<%= output_dir %>"],
        copy: {
            main: {
                src: ["<%= src_files %>", "!*njsproj", "!*.sln", "!*.suo", "../node_modules"],
                dest: "<%= output_dir %>",
                expand: true,
                cwd: "src"
            },
            modules: {
                src: "node_modules/**",
                dest: "<%= output_dir %>"
            }
        }
    });

    /*grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["clean", "copy"]);*/

    grunt.registerTask("default", function () {
        console.log("No tasks here yet. Ignoring..");
    });
}