<?php
namespace App\Controllers;


use App\Models\ProductModel as ProductModel;

class DeleteController extends Controller
{
    private $productModel = null;

    public function __construct(ProductModel $productModel)
    {
        $this->productModel = $productModel;
    }

    public function index()
    {
        $idProd = (int)$_POST['idProd'];
        $this->productModel->deleteProduct($idProd);
    }
}