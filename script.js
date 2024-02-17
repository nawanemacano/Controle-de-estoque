
        // Função para abrir a aba ao clicar
        function openTab(estoque) {
            var tabs = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(estoque).style.display = "block";
        }
        function openTab(inventario) {
            var tabs = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(inventario).style.display = "block";
        }
        function openTab(saida) {
            var tabs = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(saida).style.display = "block";
        }
        function openTab(criar) {
            var tabs = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(criar).style.display = "block";
        }
        function openTab(ajuda) {
            var tabs = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(ajuda).style.display = "block";
        }

        // Adicionar evento onclick aos elementos da aba
        var tabLinks = document.querySelectorAll(".tab-link");
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].addEventListener("click", function() {
                var tabName = this.getAttribute("data-tab");
                openTab(tabName);
            });
        }

      
