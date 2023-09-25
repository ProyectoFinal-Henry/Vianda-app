"use client"
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#F0F0F0",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    // borderWidth: 1,
    borderColor: "#222222",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  tableHeader1: {
    width: 150,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  tableHeader2: {
    width: 50,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  tableHeader3: {
    width: 50,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  tableHeader4: {
    width: 50,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  tableCell1: {
    width: 150,
    fontSize: 12,
    padding: 5,
  },
  tableCell2: {
    width: 50,
    fontSize: 12,
    padding: 5,
  },
  tableCell3: {
    width: 50,
    fontSize: 12,
    padding: 5,
  },
  tableCell4: {
    width: 50,
    fontSize: 12,
    padding: 5,
  },
})

const PedidosPDFPage = ({ pedido }) => {
  // console.log("file: page.jsx:87  pedido:", pedido)
  // const pedido = {
  //   id: 1,
  //   totalVenta: "50",
  //   estado: "pagado",
  //   fecha: "2023-09-15T01:40:12.327Z",
  //   usuario: {
  //     nombreCompleto: "David Mejia",
  //     telefono: "3115228664",
  //     email: "davidalejoms@gmail.com",
  //   },
  //   detallePedido: [
  //     {
  //       viandaNombre: "arroz con pollo",
  //       precio: "10",
  //       cantidad: 2,
  //       total: "20",
  //     },
  //     {
  //       viandaNombre: "arroz con pollo",
  //       precio: "10",
  //       cantidad: 2,
  //       total: "20",
  //     },
  //     {
  //       viandaNombre: "arroz con pollo",
  //       precio: "10",
  //       cantidad: 2,
  //       total: "20",
  //     },
  //   ],
  // }

  return (
    <>
      {pedido && (
        <Document>
          <Page
            size="A4"
            style={styles.page}
          >
            <View style={styles.section}>
              <Text style={styles.title}>COMPROBANTE DE PEDIDO:</Text>

              <Text>Id de orden: {pedido.id}</Text>

              <Text>Estado: {pedido.estado}</Text>
              
              {/* pedido.fecha to string formated:... */}
              <Text>Fecha: {new Date(pedido.fecha).toLocaleDateString()}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Datos del Cliente:</Text>
              {pedido.usuario && (
                <>
                  <Text>Nombre: {pedido.usuario.nombreCompleto}</Text>
                  <Text>Teléfono: {pedido.usuario.telefono}</Text>
                  <Text>Correo: {pedido.usuario.email}</Text>
                </>
              )}
            </View>

            {pedido.detallePedido && (
              <View style={styles.section}>
                <Text style={styles.subtitle}>Detalle del Pedido:</Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader1}>Vianda</Text>
                    <Text style={styles.tableHeader2}>Precio</Text>
                    <Text style={styles.tableHeader3}>Cantidad</Text>
                    <Text style={styles.tableHeader4}>Total</Text>
                  </View>
                  {pedido.detallePedido.map((detalle, i) => (
                    <View
                      style={styles.tableRow}
                      key={i}
                    >
                      <Text style={styles.tableCell1}>{detalle.viandaNombre}</Text>
                      <Text style={styles.tableCell2}>{detalle.precio}</Text>
                      <Text style={styles.tableCell3}>{detalle.cantidad}</Text>
                      <Text style={styles.tableCell4}>{detalle.total}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            <View style={styles.section}>
              <Text>Total Venta: {pedido.totalVenta}</Text>
            </View>
          </Page>
        </Document>
      )}
    </>
  )
}

export default PedidosPDFPage
