			<!-- Sección de carrito -->
			<a id="carrito" href="<?php echo base_url() . "index.php/carrito"; ?>">
                          <img src="<?php echo base_url() . "/img/carrito.jpg"; ?>" alt="Carrito" id="logoCarrito" title="Carrito de compra">
			  <?php echo $items; ?> items</a>
                        </a>
			
			<!-- Sección de búsqueda -->
			<select id="selectPropiedades">
				<option value="arquitectura">Arquitectura</option>
				<option value="frecuencia">Frecuencia(MHz)</option>
				<option value="flash">Flash(KB)</option>
				<option value="ram">RAM(KB)</option>
			</select>
			<input type="text" id="textoBusq" placeholder="Búsqueda...">
		<input type="image" src="<?php echo base_url() . "/img/buscar.png"; ?>" alt="Buscar productos" id="logoBusqueda">
			<!-- Sección de listado completo -->
			<a href="<?php echo base_url() . "index.php/listar_todo" ?>" id="botonListado">LISTADO COMPLETO</a>
		</div>
		<div id="titulo">
			<canvas id="canvasTitulo" width="1000" height="60"></canvas>
			<script>
				var canvas = document.getElementById('canvasTitulo');
				var context = canvas.getContext('2d');
				var x = canvas.width / 2;
				var y = canvas.height / 2;

				context.font = '18pt Calibri bold';
				// textAlign aligns text horizontally relative to placement
				context.textAlign = 'center';
				// textBaseline aligns text vertically relative to font style
				context.textBaseline = 'middle';
				context.fillStyle = 'blue';
				context.fillText('!Bienvenido a nuestro catálogo!', x, y);
			</script>
		</div>
		<div>
			<div id="descripcion" rows="20" cols="120" readonly="true">
				Descripción de la empresa y de lo que ofrecemos en nuestro catálogo
			</div>
