var page = require('page')
var firebase = require('firebase')
var config = require('./config')

if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

page('/guardar', () => {
	var main = document.querySelector('main')

  main.innerHTML = formTemplate
  var guardarBtn = document.querySelector('#guardar')
  guardarBtn.addEventListener('click', guardar)

   var inputFile = document.getElementById('file');
   inputFile.addEventListener('change', seleccionarImagen, false);
})

var formTemplate = `  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="nombre" type="text" class="validate">
          <label for="nombre">Nombre</label>
        </div>
        <div class="input-field col s6">
          <input id="apellido" type="text" class="validate">
          <label for="apellido">Apellido</label>
        </div>
        <div class="col s6">
           <p class="range-field">
            <input type="range" id="edad" min="1" max="100" />
          </p>
        </div>
        <div class="col s6">
          <div class="file-field input-field">
            <div class="btn">
                <span>File</span>
                <input type="file" id="file">
            </div>
             <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
          </div>
      </div>
      <a id="guardar" class="waves-effect waves-light btn">Guardar</a>
    </form>
  </div>
  </div>`

var fileSelected = null

function guardar (e)  {
	e.preventDefault()

	var storageRef = firebase.storage().ref()
  var thisRef = storageRef.child(fileSelected.name);

	thisRef.put(fileSelected)
	.then((snapshot) => {
 	 	return snapshot.downloadURL
	})
	.then(imgURL => {

		var ref = db.ref("personas")
		ref.push({
			nombre: document.querySelector('#nombre').value,
			apellido: document.querySelector('#apellido').value,
			edad: document.querySelector('#edad').value,
			avatar: imgURL
		})

		page.redirect('/lista')
	})
	.catch(err => console.error(err))
}

function seleccionarImagen (e) {
	var target = e.target
  fileSelected = target.files[0]
}