package com.qima.service;

import com.qima.dto.ProductDTO;
import com.qima.model.Product;
import com.qima.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

     public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> getAll() {
        List<Product> products = productRepository.findAll();
        return products
                .stream()
                .map(ProductDTO::convert)
                .collect(Collectors.toList());
    }

    public ProductDTO save(ProductDTO productDTO) {
        Product product = productRepository.save(Product.convert(productDTO));
        return ProductDTO.convert(product);
    }

    public List<ProductDTO> findByCategoryId(Long categoryId) {
        List<Product> products = productRepository
                .findByCategoryId(categoryId);
        return products
                .stream()
                .map(ProductDTO::convert)
                .collect(Collectors.toList());
    }

    public Optional<Product> findById(Long id){
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void delete(Long Id) {
        Optional<Product> product = productRepository.findById(Id);
        product.ifPresent(productRepository::delete);
    }

    public List<ProductDTO> findAllSorted(String field, String direction) {
        Sort sort = Sort.by(Sort.Direction.fromString(direction), field);
        List<Product> products = productRepository.findAll(sort);

        return products.stream()
                .map(ProductDTO::convert)
                .collect(Collectors.toList());
    }

    public ProductDTO editProduct(long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

        if (productDTO.getName() != null || !productDTO.getName().isEmpty()) {
            product.setName(productDTO.getName());
        }
        if (productDTO.getPrice() != null) {
            product.setPrice(productDTO.getPrice());
        }
        return ProductDTO.convert(productRepository.save(product));

    }

    public Page<ProductDTO> getAllPage(Pageable page) {
        Page<Product> products = productRepository.findAll(page);
        return products
                .map(ProductDTO::convert);
    }
}
