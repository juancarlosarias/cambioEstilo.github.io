/**
 *
 * Biblioteca para solicitud ajax usando el objeto `XMLHttpRequest`
 * Métodos incluidos:
 *
 * POST
 * OBTENER
 * PONER
 * BORRAR
 *
* @autor de  carpincho
* @desde el 04/03/19.
* @version  1.0
 */

/**
 * Formato de medios compatible
* @type  {{JSON: string}}
 */
const  MediaFormat  = {
    JSON :  ' application / json '
};

/**
 * Línea de estado soportada
* @type  {{OK: número, CREADO: número, NOT_CONTENT: número, NOT_MODIFIED: número, NOT_FOUND: número, INTERNAL_SERVER_ERROR: número}}
 */
   const estado = {
    OK :  200 ,
    CREADO :  201 ,
    NOT_CONTENT :  204 ,
    NO_MODIFICADO :  304 ,
    NOT_FOUND :  404 ,
    INTERNAL_SERVER_ERROR :  500 ,
};


const  Ajax  = {

    /*
     * Función para solicitud POST
     *
     * @param url la url a la que queremos llamar, por ejemplo, `https: // some / path /`
     * @param params como un objeto JSON, por ejemplo, {"key1": "value1", "key2": "key2"}
     * @param acepta: JSON
     * @param callbackSuccess: la función a la que se llamará una vez que la solicitud se haya procesado correctamente.
     * @param callbackError: la función que se llamará una vez que la solicitud emita un error.
     * @param asíncrono: verdadero o falso
     * @param type: el formato multimedia
     * */
    sendPostRequest :  función ( url , params , accept , callbackSuccess , callbackError , asynchronous , type )
     {
        tipo = tipo ||  MediaFormat . JSON ;
        dejarencabezados = [];
        cabeceras . push ( esto . getContentHeader (tipo));

        esta . sendAjaxRequest ( " POST " , params, url, headers, callbackSuccess, callbackError, asynchronous, type);
    }

    /*
     * Función para solicitud GET
     *
     * @param url la url a la que queremos llamar, por ejemplo, `https: // some / path /`
     * @param params como un objeto JSON, por ejemplo, {"key1": "value1", "key2": "key2"}
     * @param acepta: JSON
     * @param callbackSuccess: la función a la que se llamará una vez que la solicitud se haya procesado correctamente.
     * @param callbackError: la función que se llamará una vez que la solicitud emita un error.
     * @param asíncrono: verdadero o falso
     * */
    sendGetRequest :  función ( url , params , accept , callbackSuccess , callbackError , asynchronous ) {
        dejarencabezados = [];
        cabeceras . push ( esto . getAcceptHeader (accept));
        esta . sendAjaxRequest ( " GET " , params, url, headers, callbackSuccess, callbackError, asynchronous);
    }

    /*
     * Función para solicitud PUT
     *
     * @param url la url a la que queremos llamar, por ejemplo, `https: // some / path /`
     * @param params como un objeto JSON, por ejemplo, {"key1": "value1", "key2": "key2"}
     * @param acepta: JSON
     * @param callbackSuccess: la función a la que se llamará una vez que la solicitud se haya procesado correctamente.
     * @param callbackError: la función que se llamará una vez que la solicitud emita un error.
     * @param asíncrono: verdadero o falso
     * @param type: el formato multimedia
     * */

    sendPutRequest :  función ( url , params , accept , callbackSuccess , callbackError , asynchronous , type ) {
        tipo = tipo ||  MediaFormat . JSON ;
        dejarencabezados = [];
        cabeceras . push ( esto . getContentHeader (tipo));
        cabeceras . push ( esto . getAcceptHeader (accept));

        esta . sendAjaxRequest ( " PUT " , params, url, headers, callbackSuccess, callbackError, asynchronous);
    }

    /*
     * Función para solicitud de BORRAR
     *
     * @param url la url a la que queremos llamar, por ejemplo, `https: // some / path /`
     * @param params como un objeto JSON, por ejemplo, {"key1": "value1", "key2": "key2"}
     * @param acepta: JSON
     * @param callbackSuccess: la función a la que se llamará una vez que la solicitud se haya procesado correctamente.
     * @param callbackError: la función que se llamará una vez que la solicitud emita un error.
     * @param asíncrono: verdadero o falso
     * */

    sendDeleteRequest :  function ( url , params , accept , callbackSuccess , callbackError , asynchronous ) {
        dejarencabezados = [];
        cabeceras . push ( esto . getAcceptHeader (accept));

        esta . sendAjaxRequest ( " DELETE " , params, url, headers, callbackSuccess, callbackError, asynchronous);
    }

    /*
     * Solicitud de AJAX
     *
     * @param method = POST o GET o DELETE o PUT
     * @param data como un objeto JSON, por ejemplo, {"key1": "value1", "key2": "key2"}
     * @param headers: el encabezado que debe ser enviado
     * @param callbackSuccess: la función a la que se llamará una vez que la solicitud se haya procesado correctamente.
     * @param callbackError: la función que se llamará una vez que la solicitud emita un error.
     * @param asíncrono: verdadero o falso
     * @param type: el formato multimedia
     *
     * */
    sendAjaxRequest :  función ( método , datos , url , encabezados , callbackSuccess , callbackError , asynchronous , type ) {

        var xmlHTTP =  new  XMLHttpRequest ();
        tipo = tipo ||  MediaFormat . JSON ;

        xmlHTTP . onreadystatechange  =  function () {

            if ( xmlHTTP . readyState  ===  XMLHttpRequest . DONE ) {

                const  STATUS_ACCEPTED  = [ STATUS . OK , ESTADO . CREADO , ESTADO . NOT_CONTENT , ESTADO . NOT_MODIFIED ];

                if ( STATUS_ACCEPTED . indexOf ( xmlHTTP . status ) >=  0 ) {
                    callbackSuccess ( xmlHTTP . responseText );
                } else {
                    callbackError ( xmlHTTP . status );
                }

            }
        };

        xmlHTTP . abierto (método, url, asíncrono);
        cabeceras . forEach (( item ) =>  xmlHTTP . setRequestHeader ( item . header , item . value ));

        if (tipo ===  MediaFormat . JSON )
            xmlHTTP . enviar ( JSON . stringify (datos));
        más
            lanzar  " Formato de medios no soportado " ;
    }

    /*
     * Devuelve el encabezado `Aceptar`.
     *
     * @param accept: solo compatible con JSON
     * */
    getAcceptHeader :  function ( accept ) {
        if (accept ===  MediaFormat . JSON )
            return {encabezado :  " Aceptar " , valor :  MediaFormat . JSON };

        lanzar  " Formato de medios no soportado " ;
    }

    /*
     * Devuelve el encabezado `Content-type`.
     *
     * @param type: solo compatible con JSON
     * */
    getContentHeader :  function ( type ) {

        if (tipo ===  MediaFormat . JSON )
            return { " header " :  " Content-Type " , " value " :  MediaFormat . JSON };

        lanzar  " Formato de medios no soportado " ;
    }
};