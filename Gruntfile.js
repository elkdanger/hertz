module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		src_files: "**",
		output_dir: "publish/",
		clean: ["<%= output_dir %>"],
		copy: {
			main: {
				src: ["<%= src_files %>", "!*njsproj", "!*.sln", "!*.suo"],
				dest: "<%= output_dir %>",
				expand: true,
				cwd: "src"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", ["clean", "copy"]);
}