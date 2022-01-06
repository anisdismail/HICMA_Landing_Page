class Scroll {
  constructor(section, timing, actions) {
    this.__section = section;
    this.__timing = timing;
    this.__actions = actions;
  }
}

class Action {
  constructor(querySel, translateX, translateY, scale, opacity) {
    this.__querySel = querySel;
    this.__translateX = translateX;
    this.__translateY = translateY;
    this.__scale = scale;
    this.__opacity = opacity;
  }
}

let action_1 = new Action('#title', undefined, -140, undefined, [1, 0]);
let action_2 = new Action('.why-section-child', undefined, '-25%', undefined, [0, 1.75]);
let action_3 = new Action('#arabic-letters', undefined, '-70%', undefined, [0, 1]);
let action_4 = new Action('#letter-1', '-10%', '-15%', [1, 2], [1, 0]);
let action_5 = new Action('#letter-2', '-4%', '-5%', undefined, [1, 0]);
let action_6 = new Action('#letter-3', '8%', '-17%', [1, 1.5], [1, 0]);
let action_7 = new Action('#letter-4', '-15%', '-2%', [1, 2], [1, 0]);
let action_8 = new Action('#letter-5', '-7%', '-1%', [1, 1.2], [1, 0]);
let action_9 = new Action('#letter-6', '12%', '-3%', [1, 1.8], [1, 0]);
let action_10 = new Action('#letter-7', '5%', '14%', [1, 1.7], [1, 0]);
let action_11 = new Action('#letter-8', '9%', '6%', [1, 2], [1, 0]);
let action_12 = new Action('.why-section-child', undefined, ['-25%', '-40%'], undefined, [1, 0]);
let action_13 = new Action('#reqs-section-child', undefined, '-25%', undefined, [0, 1.75]);
let action_14 = new Action('#reqs-section-child', undefined, ['-25%', '-25%'], [1, 0.6], [1.75, -0.75]);
let action_15 = new Action('#history', undefined, undefined, [0.8, 1], [0, 2]);

let scroll_1 = new Scroll('#intro', '100%', [action_1]);
let scroll_2 = new Scroll('#why-section', '150%', [action_2, action_3]);
let scroll_3 = new Scroll('#why-section', '150%', [action_4, action_5, action_6, action_7, action_8, action_9, action_10, action_11]);
let scroll_4 = new Scroll('#why-section', '100%', [action_12]);
let scroll_5 = new Scroll('#reqs-section', '150%', [action_13]);
let scroll_6 = new Scroll('#reqs-section', '20%', []);
let scroll_7 = new Scroll('#reqs-section', '100%', [action_14]);
let scroll_8 = new Scroll('#history', '100%', [action_15]);
let scroll_9 = new Scroll(undefined, '100%', []);
scrolls = [scroll_1, scroll_2, scroll_3, scroll_4, scroll_5, scroll_6, scroll_7, scroll_8, scroll_9];

const onLoad = () => {
  $(() => {
    var sections = [],
      curr_section = null,
      height = 0,
      windowHeight = 0,
      windowWidth = 0,
      time_passed = 0,
      upScroll = 0,
      relativity = 0,
      current_scroll = 0;

    onLoadHelper = () => {
      scrollIntervalID = setInterval(reform, 10);
      upScroll = $(window).scrollTop();
      windowHeight = $(window).height();
      windowWidth = $(window).width();

      // Converting values
      for (
        let scroll_counter = 0;
        scroll_counter < scrolls.length;
        scroll_counter++
      ) {
        scrolls[scroll_counter].__timing = percentageToPx(
          scrolls[scroll_counter].__timing,
          false
        );
        for (
          let action_counter = 0;
          action_counter < scrolls[scroll_counter].__actions.length;
          action_counter++
        ) {
          let curr_action = scrolls[scroll_counter].__actions[action_counter];
          let transX = curr_action.__translateX;
          let transY = curr_action.__translateY;
          if (typeof transX === "string") {
            curr_action.__translateX = percentageToPx(transX, true);
          } else if (typeof transX === "object") {
            temp = [];
            for (i = 0; i < transX.length; i++) {
              let v = percentageToPx(transX[i], true);
              temp.push(v);
            }
            curr_action.__translateX = temp;
          }
          if (typeof transY === "string") {
            curr_action.__translateY = percentageToPx(transY, false);
          } else if (typeof transY === "object") {
            temp = [];
            for (i = 0; i < transY.length; i++) {
              let v = percentageToPx(transY[i], false);
              temp.push(v);
            }
            curr_action.__translateY = temp;
          }
        }
      }

      // Building the page
      for (
        scroll_counter = 0;
        scroll_counter < scrolls.length;
        scroll_counter++
      ) {
        height += scrolls[scroll_counter].__timing;
        let curr_section = scrolls[scroll_counter].__section;
        const added = sections.find((section) => section == curr_section);
        if (!added) {
          sections.push(curr_section);
        }
        for (
          let action_counter = 0;
          action_counter < scrolls[scroll_counter].__actions.length;
          action_counter++
        ) {
          let curr_action = scrolls[scroll_counter].__actions[action_counter];
          let transX = curr_action.__translateX;
          let transY = curr_action.__translateY;
          if (!(transX instanceof Array) && !(transX == undefined)) {
            curr_action.__translateX = [0, transX];
          }
          if (!(transY instanceof Array) && !(transY == undefined)) {
            curr_action.__translateY = [0, transY];
          }
        }
      }

      $("body").height(height);
      $(window).scroll(0);
      curr_section = sections[0];
      $(curr_section).show();
      $(window).resize(() => {
        $("body").addClass("page-error");
      });
      if ("ontouchstart" in window || "onmsgesturechange" in window) {
        $(window).resize(() => {
          $("body").addClass("page-error");
        });
      }
    };

    reform = () => {
      window.requestAnimationFrame(() => {
        upScroll = $(window).scrollTop();
        relativity = upScroll - time_passed;
        if (upScroll > 0 && upScroll <= height - windowHeight) {
          // Animating elements
          var action, translateY, translateX, scale, opacity;
          for (var i = 0; i < scrolls[current_scroll].__actions.length; i++) {
            action = scrolls[current_scroll].__actions[i];
            translateY = toPixels(action, "translateY");
            translateX = toPixels(action, "translateX");
            scale = toPixels(action, "scale");
            opacity = toPixels(action, "opacity");

            $(action.__querySel).css({
              transform:
                "translate3d(" +
                translateX +
                "px, " +
                translateY +
                "px, 0) scale(" +
                scale +
                ") rotate(" +
                0 +
                "deg)",
              opacity: opacity,
            });
          }

          // Setting keyframe
          if (upScroll > scrolls[current_scroll].__timing + time_passed) {
            time_passed += scrolls[current_scroll].__timing;
            current_scroll++;
            showNewSection();
          } else if (upScroll < time_passed) {
            current_scroll--;
            time_passed -= scrolls[current_scroll].__timing;
            showNewSection();
          }
        }
      });
    };

    toPixels = (action, property) => {
      var value;
      switch (property) {
        case "translateX":
          value = action.__translateX;
          break;
        case "translateY":
          value = action.__translateY;
          break;
        case "scale":
          value = action.__scale;
          break;
        case "opacity":
          value = action.__opacity;
          break;
        default:
          value = undefined;
          break;
      }
      if (value) {
        value = pxConverter(
          relativity,
          value[0],
          value[1] - value[0],
          scrolls[current_scroll].__timing
        );
      } else {
        switch (property) {
          case "translateX":
            value = 0;
            break;
          case "translateY":
            value = 0;
            break;
          case "scale":
            value = 1;
            break;
          case "opacity":
            value = 1;
            break;
          default:
            value = undefined;
            break;
        }
      }
      return value;
    };

    pxConverter = (relativity, initial, last, time) => {
      return (
        (-(Math.cos((Math.PI * relativity) / time) - 1) / 2) * last + initial
      );
    };

    showNewSection = () => {
      if (scrolls[current_scroll].__section != curr_section) {
        $(curr_section).hide();
        $(scrolls[current_scroll].__section).show();
        curr_section = scrolls[current_scroll].__section;
      }
    };

    percentageToPx = (value, x) => {
      if (typeof value === "string" && value.match(/%/g)) {
        if (x) {
          value = (parseFloat(value) / 100) * windowWidth;
        } else {
          value = (parseFloat(value) / 100) * windowHeight;
        }
      }
      return value;
    };
    onLoadHelper();
  });
};

onLoad();