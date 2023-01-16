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
        $data = (int)$_POST['id'];
        $this->productModel->deleteProduct($data);
    }
}