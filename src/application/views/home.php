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
