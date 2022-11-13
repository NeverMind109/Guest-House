import AOS from "aos";
AOS.init({
  once: true,
  disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  },
});
