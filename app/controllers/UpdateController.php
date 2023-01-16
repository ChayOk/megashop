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
        $idProd = (int)$_POST['idProdUpdate'];
        $data['name'] = $_POST['updatedName'];
        $data['price'] = (float)$_POST['updatedPrice'];                

        $this->productModel->updateProduct($data, $idProd);
    }
}