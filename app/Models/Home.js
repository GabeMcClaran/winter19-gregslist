export default class Home {
  constructor(data) {
    this.homeType = data.homeType || "unknown";
    this.price = data.price || "uknown";
    this.beds = data.beds || "No Input";
    this.rooms = data.rooms || "No Input";
  }

  getTemplate(index) {
    return `
    
    <div class="col-3 m-3 p-2 border rounded bg-dark">
    <h2>${this.homeType}</h2>
    <h2>${this.price}</h2>
    <h5>${this.beds}</h5>
    <h5>${this.rooms}</h5>
    <button class="btn btn-danger btn-block"
     onclick="app.homeController.delortHome(${index})">Delort</button>
</div>`;
  }
}
