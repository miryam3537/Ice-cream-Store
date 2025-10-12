import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Link, useNavigate } from "react-router-dom";
import { Message } from 'primereact/message';


export default function ProductList() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
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

            case "4":
                return 'warning';

            case "3":
                return 'danger';

            default:
                return null;
        }
    };
    // const deleteProduct = async (id) => {
    //         alert("you runt to delete??")
    //         try {
    //             await axios.delete(`http://localhost:6543/api/product/${id}`)
    //             fetchProduct()
        
    //         }
    //         catch (err) {
    //             console.error(err)
    //         }
    //     }

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} alt={product.p_name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900 cr">{product.p_name}</div>
                            <Rating className="cr" value={product.score.toString()} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    {/* <span className="font-semibold">{product.category}</span> */}
                                </span>
                                <Tag value={product.score} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                        <Button icon="pi pi-shopping-cart" onClick={()=>{navigate(`/component/compAddToCart/${product._id}`)}} className=" ch p-c-rounded"  disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        {/* <Tag value={product.score} severity={getSeverity(product)}></Tag> */}
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                    <Link to={`/component/compDetail/${product._id}`}><img className="w-9 shadow-2 border-round" src={`${product.image}`} alt={product.p_name} /></Link>
                          <div className="text-2xl font-bold">{product.p_name}</div>
                        <Rating value={product.score.toString()} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <Button className="zuz "icon="pi pi-shopping-cart" rounded  aria-label="Cancel"  onClick={()=>{navigate(`/component/compAddToCart/${product._id}`)}}  disabled={product.inventoryStatus === 'OUTOFSTOCK'}>
                       
                        </Button>
                    </div>
                </div>
            </div>
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
        <div className="card">
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    )
}


///////////////////////////
// const ProductList=()=>{
// const [product,setproduct]= useState([]) 
// const fetchProduct = async ()=>{
//     const {data}= await axios.get("http://localhost:6543/api/product")
//     console.log(data)
//     setproduct(data)
// }
// const deleteProduct = async (id) => {
//     alert("you runt to delete??")
//     try {
//         await axios.delete(`http://localhost:6543/api/product/${id}`)
//         fetchProduct()

//     }
//     catch (err) {
//         console.error(err)
//     }
// }

// const navigate = useNavigate()

// useEffect(()=>{
//     fetchProduct()
// },[])
//   if(product.length===0) return <h1>Loading</h1>

/*  return(
      <>
      { <Link to="/product/add">add new product!</Link> */
{/* {product.map((prod)=>{
            return(<div>
                
                <Link to={`/product/compDetail/${prod._id}`}>{prod.p_name}<br/>
                <img src={prod.image} style={{width:200}} ></img></Link>

                <button onClick={() => {
                            deleteProduct(prod._id)
                        }}>❌</button>
                <button onClick={()=>{navigate(`/product/upDate/${prod._id}`)}}>⭕</button>
                <div className="card flex justify-content-center">
                    <button onClick={()=>{navigate(`/component/compAddToCart/${prod._id}`)}} >🛒</button>
                 */}
{/* <Button label="הוספה לסל" icon="pi pi-pencil" ></Button> */ }
/*  { </div>
      </div>) 
     })}}
  </>
)
// }
// export default ProductList */