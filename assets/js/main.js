var app = new Vue({
  el: "#app",
  data: {
    categoryProducts: [
      {
        frutas: "Frutas",
        enlatados: "Enlatados",
        carnes: "Carnes",
        verduras: "Verduras",
      },
    ],
    products: [
      {
        name: "Manzana",
        category: "Frutas",
        cant: 10,
        priceU: 1000,
        description: "Saludable y nutritivo",
      },
      {
        name: "Maiz Enlatado Zenu",
        category: "Enlatados",
        cant: 9,
        priceU: 1100,
        description: "Saludable y nutritivo",
      },
      {
        name: "Ribeye",
        category: "Carnes",
        cant: 7,
        priceU: 2000,
        description: "Saludable y nutritivo",
      },
      {
        name: "Cebolla Roja",
        category: "Verduras",
        cant: 6,
        priceU: 500,
        description: "Saludable y nutritivo",
      },
    ],
    dataTable: [],
    newProducts: [],
    product: "",
    name: "",
    values: "",
    price: "",
    cant: "",
    description: "",
    viewMain: 0,
  },

  methods: {
    ver(num) {
      if (num == 1) {
        this.viewMain = 1;
      } else {
        this.viewMain = 2;
      }
    },
    list() {
      this.newProducts= this.products
    },
    updateLocalStorage() {
      localStorage.setItem("productss", JSON.stringify(this.newProducts));
    },
    agg(num) {
      if (num == 1) {
        if (
          this.name == "" ||
          this.values == "" ||
          this.price == "" ||
          this.cant == "" ||
          this.description == ""
        ) {
          alert("LLene todos los espacios en blanco");
        } else {
          this.newProducts.push({
            name: this.name,
            category: this.values,
            cant: this.cant,
            priceU: this.price,
            description: this.description,
          });
          this.updateLocalStorage();
          alert("Se agrego el producto correctamente");
          this.name = "";
          this.values = "";
          this.cant = "";
          this.price = "";
          this.description = "";
        }
      } else if (num == 2) {
        if (this.product == '' || this.cant == '') {
          alert('LLene los todos los detalles del producto que desea llevar')
        } else {
          let index = this.newProducts.findIndex(element => {
            if (element.name == this.product) {
              return element
            }
          });
          this.dataTable.push({
            name: this.newProducts[index].name,
            priceU: this.newProducts[index].priceU,
            cant: this.cant,
            description: this.newProducts[index].description,
            total:
              parseInt(this.cant) * parseInt(this.newProducts[index].priceU),
          });
        }

      }
    },
  },
  created() {
    if (localStorage.getItem("productss") !== null) {
      this.newProducts = JSON.parse(localStorage.getItem("productss"));
    } else {
      this.list()
    }
  },
  mounted() {},
  computed: {
  },
});