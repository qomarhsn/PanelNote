import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import { ExtensionPreferences } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class PanelNotePreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    let buildable = new Gtk.Builder();
    buildable.add_from_file(this.dir.get_path() + "/prefs.xml");

    let settings = this.getSettings();
    settings.bind(
      "enable-positioning",
      buildable.get_object("field_enablepositioning"),
      "active",
      Gio.SettingsBindFlags.DEFAULT
    );
    settings.bind(
      "enable-positioning",
      buildable.get_object("box_position"),
      "sensitive",
      Gio.SettingsBindFlags.DEFAULT
    );
    settings.bind(
      "position",
      buildable.get_object("field_position"),
      "active",
      Gio.SettingsBindFlags.DEFAULT
    );
    settings.bind(
      "position-number",
      buildable.get_object("field_positionnumber"),
      "value",
      Gio.SettingsBindFlags.DEFAULT
    );

    window.search_enabled = true;
    window.add(buildable.get_object("page_basic"));
  }
}
