<?php
/**
 * @file
 * pece_artifacts.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pece_artifacts_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "panelizer" && $api == "panelizer") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function pece_artifacts_node_info() {
  $items = array(
    'pece_artifact' => array(
      'name' => t('Artifact'),
      'base' => 'node_content',
      'description' => t('Base content type for all the subtypes of Artifacts.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}