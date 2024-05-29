
import "@hotwired/turbo-rails"
import "./controllers"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
import "jquery"
import "popper.js" 

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// Mark "channels" import as external
import "channels" // external

// Mark "controllers/application" import as external
import { application } from "controllers/application" // external

// Mark "@hotwired/stimulus-loading" import as external
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading" // external

//= require jquery 
//= require jquery_ujs