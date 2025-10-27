// Pruebas unitarias para validarTelefono()

function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}

describe('Función validarTelefono', () => {
  it('debería aceptar solo números', () => {
    console.assert(validarTelefono('1234567890') === true, 'Debe aceptar números');
  });

  it('debería rechazar letras', () => {
    console.assert(validarTelefono('123abc') === false, 'No debe aceptar letras');
  });

  it('debería rechazar símbolos', () => {
    console.assert(validarTelefono('123-456') === false, 'No debe aceptar símbolos');
  });
});

