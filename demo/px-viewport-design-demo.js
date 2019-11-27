/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-viewport-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-viewport-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-viewport-design" description="Default viewport parameters for Predix UI components." layer="base" sassdoc-path="sassdoc.json" hide-demo-container="" selected-options="{{selectedOptions}}">

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Array of different breakpoints -->
Default recommended \$breakpoints
  palm             screen and (max-width: 47.9em),
  lap-and-up       screen and (min-width: 48em),
  desk-and-up      screen and (min-width: 64em),
  large-and-up     screen and (min-width: 120em),
  retina           (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)


<!-- Viewport -->
<div class="viewport"></div>


<!-- Viewport Full Height -->
<div class="viewport--full-height"></div>

\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-viewport-design-demo'
});
