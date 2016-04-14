# ElectronTryOut
it's a <i>Badly written code ;P</i>
<hr/>
<p>This is a simple project to demonstrate some ideas behind few technologies.</p>
<p>First of all, this is <b>Electron</b> application (right now it's configured and tested strictly on <code>Mac OS X 10.9.x</code>),
which is using <b>babel</b> for compiling <b>JavaScript ES6</b> to more compatible version of <b>JS</b>, <b>ES5</b>.</p>
<p>Moreover <b>Webpack</b> is used to do the babel compilation and to compact all scripts to fever files that can be loaded by <code>index.html</code> in less requests.
Webpack can be also called with '<code>PROD=true</code>' variable to do <b>Dedupe</b> (remove duplicates), <b>Uglify</b> and <b>Minifi</b> the JS code.</p>