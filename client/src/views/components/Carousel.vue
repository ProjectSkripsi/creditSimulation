<template>
    <section class="section section-lg section-shaped overflow-hidden my-0" id="rumah">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Perumnas 7</h1>
                    <p class="lead text-white mt-4">Membeli rumah pertama bisa menjadi keputusan yang sangat besar bagi Anda. 
                        Butuh waktu panjang untuk melakukan pertimbangan sampai akhirnya mengambil keputusan.
                        Lamanya pertimbangan bisa disebabkan karena butuh waktu untuk mengumpulkan uang muka yang tidak sedikit,
                        mencari rumah yang tepat, sampai dengan bernegosiasi harga yang pas. Termasuk juga soal pertimbangan antara rumah atau apartemen.</p>
                    
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/brand/5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/4.jpeg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/6.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/brand/7.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
