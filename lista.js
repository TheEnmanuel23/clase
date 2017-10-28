var page = require('page')
var firebase = require('firebase')
var config = require('./config')
var templateLista = require('./templateLista')

page('/lista', mostrarLoader, function () {
	var main = document.querySelector('main')
	
if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

function obtenerDatos (datos) {
	var arrayDatos = datos.val()

	var main = document.querySelector('main')

	var html =  templateLista(arrayDatos)
	
	main.innerHTML = html
}

db.ref('personas').once('value').then(obtenerDatos)
})

function mostrarLoader (ctx, next) {
	var html = `
	  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
  var main = document.querySelector('main')
  main.innerHTML = html
  next()
}