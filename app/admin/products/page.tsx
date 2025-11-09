import Link from "next/link";
import { getAllProducts, deleteProduct } from "@/lib/actions/product.actions";
import { formatCurrency, formatId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TableHead, TableHeader, TableRow, Table, TableBody, TableCell } from "@/components/ui/table";
import Pagination from "@/components/shared/pagination";
import DeleteDialog from "@/components/shared/delete-dialog";

const AdminProductsPage = async (props: {
    searchParams: Promise<{
        page: string;
        query: string;
        category: string;
    }>
}) => {
    const searchParams = await props.searchParams;

    const page = Number(searchParams.page) || 1;
    const searchText = searchParams.query || '';
    const category = searchParams.category || '';

    const products = await getAllProducts({
        query: searchText,
        page,
        category
    })
console.log(products)
    // Debug logging to see what data we're getting
    console.log('Products data:', products);
    console.log('Products array:', products?.data);
    console.log('Products array length:', products?.data?.length);

    return ( 
        <div className="space-y-2">
            <div className="flex-between">
                <h1 className="h2-bold">Products</h1>
                <Button asChild variant='default'>
                    <Link href='/admin/products/create'>Create Product</Link>
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>NAME</TableHead>
                        <TableHead className="text-right">PRICE</TableHead>
                        <TableHead>CATEGORY</TableHead>
                        <TableHead>STOCK</TableHead>
                        <TableHead>RATING</TableHead>
                        <TableHead className="w-[100px]">ACTIONS</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products?.data && products.data.length > 0 ? (
                        products.data.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{formatId(product.id)}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell className="text-right">{formatCurrency(product.price)}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.rating}</TableCell>
                                <TableCell className="flex gap-1">
                                    <Button asChild variant='outline' size='sm'>
                                        <Link href={`/admin/products/${product.id}`}>Edit</Link>
                                    </Button>
                                    <DeleteDialog id={product.id} action={deleteProduct}/>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                {products?.data ? 'No products found' : 'Loading products...'}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {products.totalPages > 1 && (
                <Pagination page={page} totalPages={products.totalPages} />
            )}
        </div>

     );
}
 
export default AdminProductsPage;