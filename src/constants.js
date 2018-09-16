// Patrones en el nombre del producto por los que se identifica su tipo
const ENTRADA_VIP_MATCH = [/Acceso VIP/]
const QUESO_AZUL_MATCH = [/Queso Azul/]
const TARTA_MATCH = [/Tarta/]
const VINO_MATCH = [/Botella Vino/]

// Tipos de productos
const tipoProductos = {
  GENERICO: 0,
  ENTRADA_VIP: 1,
  QUESO_AZUL: 2,
  TARTA: 3,
  VINO: 4
}

// Reguladores de producto
const QUALITY_RATE = 1
const QUALITY_INITIAL_FACTOR = 1
const QUALITY_EXPIRED_FACTOR = 2
const EXPIRY_LIMIT = 0
const QUALITY_MIN = 0
const QUALITY_MAX = 50

const TARTA_EXPIRY_RATE = 2

const VIP_QLTY_INITIAL_RATE = 1
const VIP_QLTY_MIDDLE_RATE = 2
const VIP_QLTY_LAST_RATE = 3
