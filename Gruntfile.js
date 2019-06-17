module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    less: {
      style: {
        files: {
          'build/css/style.css': 'src/css/style.less'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'build/css/style.css': 'build/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: ['src/css/*.less', "src/css/blocks/*.less"],
        tasks: ['cssmin', 'less']
      },
      html: {
        files: 'build/index.html'
      }
    }
  });
};