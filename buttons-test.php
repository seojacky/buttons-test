<?php
/*
 * Plugin name: Buttons Test
 * Description: Buttons Test
 * Version: 0.1
 * Author: @big_jacky 
 * Author URI: https://t.me/big_jacky  
 * GitHub Plugin URI: 
 * Plugin URI: 
*/

add_action( 'init', 'code_button' );

function code_button() {
    add_filter( "mce_external_plugins", "code_add_button" );
    add_filter( 'mce_buttons', 'code_register_button' );
}
function code_add_button( $plugin_array ) {
    $plugin_array['mycodebutton'] = $dir = plugins_url( 'shortcode.js', __FILE__ );
    return $plugin_array;
}
function code_register_button( $buttons ) {
    array_push( $buttons, 'codebutton', 'codebutton2', 'codebutton3', 'codebutton4' );
    return $buttons;
}

//add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_style' );
function load_custom_wp_admin_style() {
   wp_enqueue_style( 'buttons_test_admin_css', plugins_url('buttons_test_admin_style.css', __FILE__) );
}
