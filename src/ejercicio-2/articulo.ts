/**
 * Clase Articulo
 */
export class Articulo{
  /**
   * 
   * @param titulo Titulo del articulo
   * @param autores Autor o autores del articulo
   * @param email Correo electronico del autor o autores del articulo
   * @param keywords Palabras claves o keywords del articulo
   * @param resumen Breve resumen del articulo
   * @param fecha Fecha de publicacion del articulo
   * @param editorial Editorial en la que se publicó el artículo.
   * @param nCitas Cantidad de veces que el artículo ha sido referenciado en otros trabajos.
   */
  constructor(private titulo: string, private autores: string[], private email: string[], private keywords: string[], 
    private resumen: string, private fecha: string, private editorial: string, private nCitas: number) {
    this.titulo = titulo;
    this.autores = autores;
    this.email = email;
    this.keywords = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.nCitas = nCitas;
    }

    /**
     * getTitulo
     * @returns el titulo del articulos
     */
    public getTitulo() {
      return this.titulo;
    }

    /**
     * getAutores
     * @returns el autor o autores del articulo
     */
    public getAutores() {
      return this.autores;
    }

    /**
     * getEmail
     * @returns el email del autor o de los autores del articulo
     */
    public getEmail() {
      return this.email;
    }

    /**
     * getKeywords
     * @returns las palabras claves del articulo
     */
    public getKeywords() {
      return this.keywords;
    }

    /**
     * getResumen
     * @returns el resumen del articulo
     */
    public getResumen() {
      return this.resumen;
    }

    /**
     * getFecha
     * @returns la fecha de publicacion del articulo
     */
    public getFecha() {
      return this.fecha;
    }

    /**
     * getEditorial
     * @returns el editorial del articulo
     */
    public getEditorial() {
      return this.editorial;
    }

    /**
     * getNCitas
     * @returns el numero de citas del articulo
     */
    public getNCitas() {
      return this.nCitas;
    }

    /**
     * setTitulo
     * @param titulo_ Nuevo titulo que queremos actualizar
     */
    public setTitulo(titulo_: string) {
      this.titulo = titulo_;
    }

    /**
     * setAutor
     * @param autor_ Nuevo autor o autores que queremos actualizar
     */
    public setAutor(autor_: string[]) {
      this.autores = autor_;
    }

    /**
     * setEmail
     * @param email_ Nuevo email que queremos actualizar
     */
    public setEmail(email_: string[]) {
      this.email = email_;
    }

    /**
     * setKeywords
     * @param keywords_ Nuevo palabras claves que queremos actualizar
     */
    public setKeywords(keywords_: string[]) {
      this.keywords = keywords_;
    }

    /**
     * setResumen
     * @param resumen_ Nuevo resumen que queremos actualizar
     */
    public setResumen(resumen_: string) {
      this.resumen = resumen_;
    }

    /**
     * setFecha
     * @param fecha_ Nueva fecha que queremos actualizar
     */
    public setFecha(fecha_: string) {
      this.fecha = fecha_;
    }

    /**
     * setEditorial
     * @param editorial_ Nueva editorial  que queremos actualizar
     */
    public setEditorial(editorial_: string) {
      this.editorial = editorial_;
    }

    /**
     * setNCitas
     * @param nCitas_ Nuevo numero de citas que queremos actualizar
     */
    public setNCitas(nCitas_: number) {
      this.nCitas = nCitas_;
    }

    /**
     * calcularAPA
     * @returns el APA correspondiente al articulo
     */
    public calcularAPA(): string {
      let APA: string = "";
      let indice = 0;

      this.autores.forEach((dato) => {
        if (indice == 0) {
          APA = dato;
        } else if (indice > 0) {
          if (indice == this.autores.length - 1) {
            APA += ` y ${dato}`;
          } else {
            APA += `, ${dato}`;
          }
        }
        indice++
      });

      APA += ` (${this.fecha}) ${this.titulo}, ${this.editorial}`;

      return APA;
    }
}

