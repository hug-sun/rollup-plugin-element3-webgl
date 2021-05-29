var typeMapping = {
  bool: {
    jsType: "Boolean",
    ctxMethod: "uniform1fv",
  },
  bvec2: {
    jsType: "Float32Array",
    ctxMethod: "uniform2fv",
  },
  bvec3: {
    jsType: "Float32Array",
    ctxMethod: "uniform3fv",
  },
  bvec4: {
    jsType: "Float32Array",
    ctxMethod: "uniform4fv",
  },

  float: {
    jsType: "Number",
    ctxMethod: "uniform1f",
  },
  vec2: {
    jsType: "Array",
    ctxMethod: "uniform2fv",
  },
  vec3: {
    jsType: "Array",
    ctxMethod: "uniform3fv",
  },
  vec4: {
    jsType: "Array",
    ctxMethod: "uniform4fv",
  },

  int: {
    jsType: "Number",
    ctxMethod: "uniform1i",
  },
  ivec2: {
    jsType: "Int32Array",
    ctxMethod: "uniform2iv",
  },
  ivec3: {
    jsType: "Int32Array",
    ctxMethod: "uniform3iv",
  },
  ivec4: {
    jsType: "Int32Array",
    ctxMethod: "uniform4iv",
  },

  mat2: {
    jsType: "Float32Array",
    ctxMethod: "uniformMatrix2fv",
  },
  mat3: {
    jsType: "Float32Array",
    ctxMethod: "uniformMatrix3fv",
  },
  mat4: {
    jsType: "Float32Array",
    ctxMethod: "uniformMatrix4fv",
  },

  sampler2D: {
    jsType: "Float32Array",
  },

  samplerCube: {
    //TODO
  },
};

export function mapType(type) {
  return typeMapping[type];
}
