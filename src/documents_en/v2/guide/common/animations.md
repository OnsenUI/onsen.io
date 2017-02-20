### Extending animations

Onsen UI already provides multiple built-in animations for its routing components and dialogs. However, it is also possible to create custom animations for specific components or even extend existing animations and change part of them. This is a relatively advanced topic since it requires digging a bit in Onsen UI core code.

#### Animit

Onsen UI relies on [Animit](https://github.com/OnsenUI/OnsenUI/blob/master/core/src/ons/animit.js), a minimal animation library for managing CSS transtions on mobile browsers.

Animit can be accessed with `ons.animit` or `import { animit } from ons;`, depending on the type of the app. It exposes methods to queue CSS animations, apply delays and run callbacks as follows:

```javascript
let animation1 = animit(myElement) // This defines the animation for the provided element
  .saveStyle() // Saves the original style of the element
  .queue({ // Original position/style in the animation
    css: {
      transform: 'translate3D(0, 100%, 0)'
    },
    duration: 0
  })
  .wait(0.2) // Delay applied before the transition starts
  .queue({ // Next step in the animation
    css: {
      transform: 'translate3D(0, 0, 0)',
    },
    duration: 0.6,
    timing: 'linear'
  })
  .restoreStyle() // Restores the original style of the element
  .queue(done => { // Optional "On transition end" callback
    callback();
    done();
  }
);

animation1.play(); // Run the animation
```

Since Animit modifies the element's `style` property, it provides `saveStyle()` and `restoreStyle()` methods to ensure the previous styles are not lost. `queue({css: {...}, duration: 0, timing: 'linear'})` or `queue({...}, {duration: 0, timing: 'linear'})` method is provided to add transitions to the queue. The first one will be the first style applied in the animation that will transition into the following styles. In the provided example, we are moving a new page inside the view from right to left. Therefore, it needs to start at position `translate3d(0, 100%, 0)` and move to `translate3d(0, 0, 0)`. Method `wait(...)` can be used to apply a delay between transitions. Finally, we can optionally call `queue(function(done) { ...; done(); })` again to run a callback if necessary.

It is also possible to pass an array of HTML elements to `animit` if performing the same animation on multiple elements is required: `animit([el1, el2]).saveStyle()...`.

It is very common to have more than one animation running at the same time. `animit.runAll(animation1, animation2, animation3);` method can be used for this behavior instead of `animation1.play(); animation2.play(); animation3.play();`.

#### Creating animators

Animators can be created from scratch by extending the necessary animator classes that Onsen UI provides. Every component exposes a minimum animator interface that must be extended and implemented: `NavigatorTransitionAnimator`, `AlertDialogAnimator`, `DialogAnimator`, `PopoverAnimator`, `ModalAnimator`, `TabbarAnimator` and `SplitterAnimator`. This is the desired way to implement animators if you want to build a custom version of Onsen UI or want to make a pull request to the repository. For more information, please have a look at the [existing animators](https://github.com/OnsenUI/OnsenUI/tree/master/core/src/elements) for every component.

ES2015 (ES6) is preffered but not strictly required for this to work. An example in ES5 can be found [here](https://codepen.io/frankdiox/pen/kXJvQL?editors=1010).

#### Extending animators

Another way to make new animators is extending an existing animator and modifiying part of its behavior (or all). This is in general easier if you just want to tweak the appearance or timing, or even if you want to create a whole new thing starting from another animator. For this it is also required to have a look at the [existing animators](https://github.com/OnsenUI/OnsenUI/tree/master/core/src/elements), choose one and check its properties and methods. Every animator provides a `extend({...})` class method that returns a new animator. Animators are exposed in every component class: `ons.NavigatorElement.animators` or `ons.AlertDialogElement.animators` are some examples. These objects contain all the registered animators and can be extended as follows.

```javascript
var fadeIOS = ons.NavigatorElement.animators['fade-ios'];
var customAnimator = fadeIOS.extend({
  timing: 'cubic-bezier(.1, .7, .1, 1)',
  delay: 0.1,
  push: function(enterPage, leavePage, callback) {
    ons.animit.runAll(
      ons.animit(enterPage)...,
      ons.animit(leavePage)...
    );
  }
});

// This step is mandatory
ons.NavigatorElement.registerAnimator('customAnimationName', customAnimator);
```

This overwrites the `push` animation but uses the original `pop` animation. `timing` and `delay` properties will still affect both animations. Some animators have extra properties, such as `backgroundMask`. Please check the animator you want to extend to see all the properties.

After the new animator is created and registered, we can simply specify the animation with its name: `myNavigator.pushPage('page.html', {animation: 'customAnimationName'})`. Or make it default: `<ons-navigator animation="customAnimationName">`. The same applies to the other components.

