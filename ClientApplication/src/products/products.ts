const PRODUCTS_API_URL = "http://localhost:3200"

interface IProductServer {
    title: string
    type: string
    price: number,
    description?: string
    filename?: string,
    height?: number,
    width?: number,
    rating?: number
}

class Product {
    public title: string;
    public type: string;
    public description: string;
    public price: number;
    public area: number
    constructor(product: IProductServer) {
        this.title = product.title
        this.type = product.type
        this.description = product.description
        this.price = product.price || 0
        this.area = product.width * product.width
    }
}

async function productPageInit() {

    await getProducts();
    $("#search").on("click", async () => {
        const category: string = ($("#category").val() as string)
        await getProducts(category);
    })

    $("#saveProduct").on("click", async () => {
        const title = $("#title").val() as string;
        const type = $("#type").val() as string;
        const price = $("#price").val() as number;
        const product = new Product({ title, type, price })
        await createProduct(product)
        await getProducts()
    })
}
async function createProduct(product: Product) {
    try {
        if (!product) throw new Error()
        await createProductService(product);
        //@ts-ignore
        swal("Created Successfully")
    } catch (ex) {
        console.log(ex)
        //@ts-ignore
        swal("Something Went Wrong")
    }
}
async function getProducts(category?: string) {
    try {
        const result = await getProductsService(category);
        const modeledResult: Array<Product> = result.map(p => new Product(p))
        // model the response 
        console.log(modeledResult)
        draw(modeledResult)
    } catch (ex) {
        console.log(ex)
        //@ts-ignore
        swal("Something Went Wrong")
    }
}

async function getProductsService(category?: string): Promise<Array<IProductServer>> {
    const url = `${PRODUCTS_API_URL}/products?category=${category || ''}`
    const result = await fetch(url)
    const jsonResult = await result.json();
    return jsonResult.data;
}

async function createProductService(product?: Product): Promise<any> {
    const url = `${PRODUCTS_API_URL}/product`
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    const jsonResult = await result.json();
    return jsonResult;
}

function draw(products: Array<any>): void {
    document.querySelector("#content").innerHTML = "";
    const result = products.map(product => getCard(product));
    document.querySelector("#content").append(...result)
}

function getCard(data: Product) {
    const mainDiv = document.createElement("div")
    mainDiv.id = data.title
    mainDiv.className = "card";
    mainDiv.style.width = "18rem"
    mainDiv.style.height = "450px"
    mainDiv.style.overflow = "auto"


    const image = document.createElement("img")
    image.src = "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
    image.className = "card-img-top p-3"
    image.alt = "No Image"

    const secondaryDiv = document.createElement("div")
    secondaryDiv.className = "card-body"

    const header = document.createElement("h5")
    header.className = "card-title"
    header.innerText = data.title

    const p1 = document.createElement("p")
    p1.id = "country"
    p1.innerText = data.price.toString()

    const p2 = document.createElement("p")
    p2.innerText = data.type

    const p3 = document.createElement("p")
    p3.innerText = data.description

    const moreInfo = document.createElement("button")
    moreInfo.className = "btn btn-primary"
    moreInfo.innerText = "Click for more"

    secondaryDiv.append(header, p1, p2, p3, moreInfo)
    mainDiv.append(image, secondaryDiv)
    return mainDiv

}


productPageInit()


