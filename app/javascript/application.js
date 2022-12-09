// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import "@hotwired/turbo-rails"
import "controllers"
import { Application } from "@hotwired/stimulus"
const application = Application.start()
//configure stimulus development experience
application.debug = false
window.Stimulus = application

import { Alert } from "tailwindcss-stimulus-components"
application.register('alert', Alert)

export { application }