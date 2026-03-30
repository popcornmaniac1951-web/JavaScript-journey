function normalizeUnits(manifest) {
  // return NEW object (no mutation)
  const result = { ...manifest };

  if (result.unit === "lb") {
    result.weight = Number((result.weight * 0.45).toFixed(2));
    result.unit = "kg";
  }

  return result;
}


function validateManifest(manifest) {
  const errors = {};

  // containerId
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}


function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
