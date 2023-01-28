CREATE TABLE sub_component_asset (
  sub_component_asset_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  asset_id INT REFERENCES asset(asset_id) ON DELETE CASCADE,
  serial_number CHAR ,
  asset_name CHAR
);