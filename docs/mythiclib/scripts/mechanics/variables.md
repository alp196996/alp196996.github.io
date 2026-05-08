# 🧮 Variables

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>
<p>
  <strong>
    Please first learn about variables
  </strong>
  <a href="./../variables">
    <strong>
      here
    </strong>
  </a>
  . Since variables have scopes, every time you are editing or initializing
  a variable, you must provide the variable scope using the
  <code>
    scope
  </code>
  option. By default it's always set to
  <code>
    SKILL
  </code>
  .
</p>

## Other variables

<p>
  There is always one mechanic for both initializing and editing the current
  value of a variable.
</p>

### Initialize/edit a number with decimals (a double)

</h3>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_double
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          value: '&lt;target.attribute.max_health&gt; - &lt;caster.attribute.max_health&gt;'
        </span>
      </span>
    </code>
  </pre>
</div>

### Initialize/edit an integer

<p>
  The formula provided in the
  <code>
    value
  </code>
  option can return a double, tho since it is an integer variable, ML will
  round the returned number to the closest lower integer.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_integer
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          value: '&lt;target.attribute.max_health&gt; - &lt;caster.attribute.max_health&gt;'
        </span>
      </span>
    </code>
  </pre>
</div>

### Initialize/edit a string variable

<p>
  This saves the script caster world name in a variable.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_string
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          value: '&lt;caster.location.world.name&gt;'
        </span>
      </span>
    </code>
  </pre>
</div>

### Initialize/edit a vector

<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          x: '10 + &lt;caster.location.x&gt;'
        </span>
      </span>
      <span class="line">
        <span>
          y: '10 + &lt;caster.location.y&gt;'
        </span>
      </span>
      <span class="line">
        <span>
          z: '10 + &lt;caster.location.z&gt;'
        </span>
      </span>
    </code>
  </pre>
</div>

## Vector calculation mechanics

<p>
  Locations, positions, vectors are treated the same way in MythicLib. The
  following mechanics have been implemented to make script creation a little
  easier: ML provides a small bundle of basic/more complex mechanics for
  vector calculation.
</p>

### Vector addition

<p>
  Use this to add a vector (stored in a variable) to another vector (stored
  in another variable).
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: add_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          added: added_vector_variable_name
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also use this to add x,y,z coordinates separately to the existing
  vector variable:
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: add_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          x: '10'
        </span>
      </span>
      <span class="line">
        <span>
          y: '4'
        </span>
      </span>
      <span class="line">
        <span>
          z: '-7'
        </span>
      </span>
    </code>
  </pre>
</div>

### Copy/duplicate vector

<p>
  Copies an existing vector (with name given by the
  <code>
    copied
  </code>
  option) into another variable (with name given by the
  <code>
    variable
  </code>
  option). The
  <code>
    scope
  </code>
  option corresponds to the scope of the new variable created.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: copy_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          copied: copied_var_name
        </span>
      </span>
    </code>
  </pre>
</div>

### Vector dot product

<p>
  Computes the dot product of vectors
  <code>
    vec1
  </code>
  and
  <code>
    vec2
  </code>
  and saves it in a variable. The result is a decimal number (double).
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: dot_product
        </span>
      </span>
      <span class="line">
        <span>
          variable: saved_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          vec1: first_vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          vec2: second_vector_variable_name
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This is completely equivalent:
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_double
        </span>
      </span>
      <span class="line">
        <span>
          variable: variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          value: '&lt;var.vec1.x&gt; * &lt;var.vec2.x&gt; + &lt;var.vec1.y&gt; *
          &lt;var.vec2.y&gt; + &lt;var.vec1.z&gt; * &lt;var.vec2.z&gt;'
        </span>
      </span>
    </code>
  </pre>
</div>

### Multiply vector by a constant

<p>
  Multiplies the X, Y and Z coordinates of a vector by the same constant.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: multiply_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          coef: '3.14159'
        </span>
      </span>
    </code>
  </pre>
</div>

### Normalize a vector

<p>
  This takes a vector and makes it of length 1 (essentially divide it by
  its own length) which is useful when working with vectors describing directions.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: normalize_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
    </code>
  </pre>
</div>

### Set X/Y/Z coordinate of a vector

<p>
  The mechanic names are
  <code>
    set_x
  </code>
  ,
  <code>
    set_y
  </code>
  and
  <code>
    set_y
  </code>
  . The following mechanic sets the Y coordinate of vector in variable
  <code>
    knockback
  </code>
  to 0.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: set_y
        </span>
      </span>
      <span class="line">
        <span>
          variable: knockback
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          z: 0
        </span>
      </span>
    </code>
  </pre>
</div>

### Vector subtraction

<p>
  Subtracts a vector from another. Use this to subtract a vector stored
  in a variable:
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: subtract_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: edited_var_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          subtracted: other_var_name
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also subtract individually X, Y and Z coordinates, which has the
  same effect of adding the opposite coordinates.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: subtract_vector
        </span>
      </span>
      <span class="line">
        <span>
          variable: edited_var_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          x: -4
        </span>
      </span>
      <span class="line">
        <span>
          y: 0
        </span>
      </span>
      <span class="line">
        <span>
          z: 10
        </span>
      </span>
    </code>
  </pre>
</div>

## Complex vector mechanics

### Vector cross product

<p>
  Computes the cross product of vectors
  <code>
    vec1
  </code>
  and
  <code>
    vec2
  </code>
  and saves it in a variable. The result is another vector.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: cross_product
        </span>
      </span>
      <span class="line">
        <span>
          variable: saved_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          vec1: first_vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          vec2: second_vector_variable_name
        </span>
      </span>
    </code>
  </pre>
</div>

### Vector hadamard product

<p>
  This multiplies the X, Y and Z coordinates of the two vectors separately
  and saves the result in a variable. The result is another vector.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_mechanic:
        </span>
      </span>
      <span class="line">
        <span>
          type: hadamard_product
        </span>
      </span>
      <span class="line">
        <span>
          variable: saved_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          scope: SKILL
        </span>
      </span>
      <span class="line">
        <span>
          vec1: first_vector_variable_name
        </span>
      </span>
      <span class="line">
        <span>
          vec2: second_vector_variable_name
        </span>
      </span>
    </code>
  </pre>
</div>
