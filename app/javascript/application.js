import "@hotwired/turbo-rails";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";


import "bootstrap";
import "jquery";
import "popper.js"; 

Rails.start();
Turbolinks.start();
ActiveStorage.start();

import { application } from "./controllers/application";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading";

const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
eagerLoadControllersFrom("controllers", application);
