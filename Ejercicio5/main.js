class Contacto {
  #nombre;
  #apellidos;
  #telefono;

  constructor(nombre, apellidos, telefono) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#telefono = telefono;
  }

  get getNombre(){
    return this.#nombre;
  }
  set setNombre(nombre){
    this.#nombre = nombre;
  }

  get geApellidos(){
    return this.#apellidos;
  }
  set setApellidos(apellidos){
    this.#apellidos = apellidos;
  }

  get getTelefono(){
    return this.#telefono;
  }
  set setTelefono(tel){
    this.#telefono = tel;
  }

  toString() {
    return `Contacto: \nNombre: ${this.#nombre} \nApellidos: ${this.#apellidos}\nTelefono: ${this.#telefono}\n`;
  }
}

class ListaContactos {
  #contactos = [];

  agregarContacto(contacto) {
    this.#contactos.push(contacto);
  }

  buscarContacto(contactoNombre) {
    const contactoObjetivo = this.#contactos.find(
      (contacto) => { contacto.getNombre === contactoNombre}
    );

    if (contactoNombre) {
      console.log(`El contacto ${contactoObjetivo.toString()}, existe en la lista`);
    } else {
      console.log(`El contacto: ${contactoNombre} no existe, en la lista`);
    }

  }

  listarContactos() {
    if (this.#contactos.length === 0) {
      console.log(`Lista de contactos vacia`);
    } else {
      for (const contacto of this.#contactos) {
        console.log(contacto.toString());
      }
    }
  }
}


//ejecutando progrmación

const miListaDeContactos = new ListaContactos();
miListaDeContactos.agregarContacto(new Contacto("Juan", "Perez", "354434"));
miListaDeContactos.agregarContacto(new Contacto("Xochitl", "Lemus", "354434"));
miListaDeContactos.agregarContacto(new Contacto("Mario", "Vargas", "354434"));
miListaDeContactos.agregarContacto(new Contacto("Luis", "Mojica", "354434"));
miListaDeContactos.agregarContacto(new Contacto("Ismael", "Garcia", "354434"));

miListaDeContactos.listarContactos();

miListaDeContactos.buscarContacto("Luis");

