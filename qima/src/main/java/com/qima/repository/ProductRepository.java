package com.qima.repository;

import com.qima.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT * FROM product p "
            + "JOIN category c ON p.category_id = c.id "
            + "WHERE c.id = :categoryId",
            nativeQuery = true)
    List<Product> findByCategoryId(@Param("categoryId") Long categoryId);

    Optional<Product> findById(Long id);

}

