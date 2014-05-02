module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		src_files: "src/*",
		output_dir: "publish",
		clean: ["<%= output_dir %>"],
		copy: {
			main: {
				src: "<%= src_files %>",
				dest: "<%= output_dir %>"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["copy"]);
}