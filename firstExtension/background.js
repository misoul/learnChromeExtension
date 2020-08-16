// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    // alert("background.js: " + "Extenstion is being installed");
    console.log('background.js: ' + 'The color is green.');
    console.log(console.file);
  });
});
