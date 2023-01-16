<?php
namespace App\Controllers;


use App\Models\ProductModel as ProductModel;

class UpdateController extends Controller
{
    private $productModel = null;

    public function __construct(ProductModel $productModel)
    {
        $this->productModel = $productModel;
    }

    public function index()
    {
        $idProd = (int)$_POST['id'];
        $data[0]['name'] = $_POST['name'];
        $data[0]['price'] = (float)$_POST['price'];                

        $this->productModel->updateProduct($data, $idProd);
    }
}