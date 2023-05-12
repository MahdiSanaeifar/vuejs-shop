<template>
  <footer>
    <div class="footer-blurb">
      <div class="container">
        <div class="row">
          <footer-item></footer-item>
        </div>
        <!-- /.row -->
      </div>
    </div>

    <div class="small-print">
      <div class="container">
        <p>
          <a href="#">Terms &amp; Conditions</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Contact</a>
        </p>
        <p>Copyright &copy; Example.com 2015</p>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterItmes from "./FooterItems";
export default {
  components: {
    "footer-item": FooterItmes
  }
};
</script>
