import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function ProductList() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        const getToken = tokenFromStorage ? tokenFromStorage.slice(9) : null;
        const decodedToken = getToken ? jwtDecode(getToken) : null;
        const userRoles = decodedToken ? decodedToken.roles : [];
        const admin = userRoles.includes("Admin");
        setIsAdmin(admin);
        console.log(isAdmin);
    }, isAdmin)

    const fetchProduct = async () => {
        const { data } = await axios.get("http://localhost:6543/api/product")
        console.log(data)
        setProducts(data)
    }
    useEffect(() => {
        fetchProduct()

    }, []);

    const getSeverity = (product) => {
        switch (product.score.toString()) {
            case "5":
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    const deleteProduct = async (id) => {
        alert("you runt to delete??")
        try {
            await axios.delete(`http://localhost:6543/api/product/${id}`)
            fetchProduct()

        }
        catch (err) {
            console.error(err)
        }
    }

    const listItem = (product, index) => {
        return (

            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} alt={product.p_name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.p_name}</div>
                            <Rating value={product.score.toString()} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    
                                </span>
                                <Tag value={product.score} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button  className="pi pi-trash" onClick={() => { deleteProduct(product._id) }}></Button>
                        <Button className="pi pi-sync"onClick={() => { navigate(`/product/upDate/${product._id}`) }}></Button>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <>
             {isAdmin && (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.score} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`${product.image}`} alt={product.p_name} />
                        <div className="text-2xl font-bold">{product.p_name}</div>
                        <Rating value={product.score.toString()} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <Button   className="zuz " icon="pi pi pi-trash" rounded  aria-label="Cancel"  onClick={() => { deleteProduct(product._id) }}></Button>
                        <Button  className="zuzt "icon="pi pi-sync" rounded  aria-label="Cancel" onClick={() => { navigate(`/product/upDate/${product._id}`) }}></Button>
                        {/* <Button icon="pi pi-shopping-cart" onClick={()=>{navigate(`/component/compAddToCart/${product._id}`)}} className="p-c-rounded"  disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                    </div>
                </div>
            </div>
            )}
            </>
        );
        
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div>
            {isAdmin && (
                <div className="card">
                   <div> <Link to ="/product/add"><h1><Button  className="big" icon="pi pi-plus" rounded severity="danger" aria-label="Cancel" /></h1></Link></div>
                    <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
                    
           

                </div>
            )}
        </div>
    );
}


