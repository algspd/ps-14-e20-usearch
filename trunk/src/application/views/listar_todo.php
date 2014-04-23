<div>
    <div class='block'>
    <div class='celdah' style="width:180px;">Referencia</div>
    <div class='celdah' style="width:180px;">Arquitectura</div>
    <div class='celdah' style="width:80px;">Frecuencia (MHz)</div>
    <div class='celdah' style="width:80px;">Flash (kb)</div>
    <div class='celdah' style="width:80px;">Ram (kb)</div>
    <div class='celdah' style="width:80px;">Precio (€)</div>
    <div class="invisible"></div>
    </div>

<?php
      foreach($resultado as $fila){
        echo "<form method='post' action='" . base_url() . "/index.php/listar_todo" . "'>";
        echo "<div class='block'>";
          echo "<div class='celda'>";
            echo $fila->ref;
            echo "<input type='hidden' value='" . $fila->ref . "' name='ref'>";
          echo "</div>";
          echo "<div class='celda'>";
            echo $fila->arch;
          echo "</div>";
          echo "<div class='celda2'>"  ;   
            echo $fila->freq;
          echo "</div>";
          echo "<div class='celda2'>";
            echo $fila->flash;
          echo "</div>";
          echo "<div class='celda2'>";
            echo $fila->ram;
          echo "</div>";
          echo "<div class='celda2'>";
            echo $fila->precio;
            echo "<input type='hidden' value='" . $fila->precio . "' name='precio'>";
          echo "</div>";
          echo "<div class='celda2 boton_anadir'>";
            echo "<input type=\"submit\" value=\"Añadir\">";
          echo "</div>";
        echo "</div>";
        echo "</form>";
    }
?>
</div>
</div>
