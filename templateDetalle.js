const templateDetalle = (persona) => {
	return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${persona.nombre}</span>
              <p><strong>Id:</strong> ${persona.id}</p>
              <p><strong>Nombre completo:</strong> ${persona.nombre} ${persona.apellido}</p>
              <p><strong>Edad:</strong> ${persona.edad}</p>
            </div>
          </div>
        </div>
      </div>
	`
}

module.exports = templateDetalle