# 📈 Experience Curves

<p>
  Experience curves allow you to define how much experience a player needs
  in order to level up. Both
  <a href="./../profession/intro">
    professions
  </a>
  and
  <a href="./../features/classes">
    classes
  </a>
  have experience curves.
</p>

## Basic Config

<p>
  All exp curves can be found under the
  <code>
    /MMOCore/exp-curves
  </code>
  folder. You can setup an exp curve by creating a
  <code>
    .txt
  </code>
  file with the following format:
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
          200
        </span>
      </span>
      <span class="line">
        <span>
          400
        </span>
      </span>
      <span class="line">
        <span>
          600
        </span>
      </span>
      <span class="line">
        <span>
          800
        </span>
      </span>
      <span class="line">
        <span>
          1000
        </span>
      </span>
      <span class="line">
        <span>
          1200
        </span>
      </span>
      <span class="line">
        <span>
          1400
        </span>
      </span>
      <span class="line">
        <span>
          1600
        </span>
      </span>
      <span class="line">
        <span>
          1800
        </span>
      </span>
      <span class="line">
        <span>
          2000
        </span>
      </span>
      <span class="line">
        <span>
          2200
        </span>
      </span>
      <span class="line">
        <span>
          2400
        </span>
      </span>
      <span class="line">
        <span>
          2600
        </span>
      </span>
      <span class="line">
        <span>
          [...]
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The first line says how much exp a player needs in order to reach level
  2, second line for level 3 and so on. Exp curves are
  <strong>
    NOT cumulative
  </strong>
  , they indicate the amount of experience needed to level up, regardless
  of how many levels the player has already reached.
</p>
<p>
  If your exp curve file is called
  <code>
    exp-curves/levels.txt
  </code>
  , you can assign it to a class or profession by using the following syntax.
  This works for both professions and classes:
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # MMOCore/class/mages.yml
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # MMOCore/profession/mining.yml
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          exp-curve
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          levels
        </span>
      </span>
    </code>
  </pre>
</div>

## Generating an EXP curve using Excel

<p>
  Using Excel (you can use it for free online on the Microsoft website)
  you can easily generate a MMOCore exp curve
  <strong>
    if you have a formula of needed exp as a function of the player level
  </strong>
  .
</p>
<p>
  <img src="/assets/curve_excel_0.R7O7bzFU.png" alt="">
</p>
<p>
  On Excel, you can use the
  <code>
    ROW(CELL_NAME)
  </code>
  function to retrieve the cell line number. You can therefore, for instance,
  use this formula:
  <code>
    = 100 + ROW(A1) * 30
  </code>
  and duplicate the cell all the way down to generate a list of numbers
  which correspond to the amount of experience needed to reach the n-th level.
</p>
<p>
  Once you have this setup, save/export your file as a
  <code>
    .txt
  </code>
  file using the
  <code>
    Text (tab separator)
  </code>
  file type. Make sure there is only one column so that no separator appears
  in the resulting text file.
</p>
<p>
  <img src="/assets/curve_excel_1.B-2NSFSC.png" alt="">
</p>

## Curves as Formulas

<p>
  Instead of using a text file located in the
  <code>
    /MMOCore/exp-curves
  </code>
  folder, you can also define exp curves using mathematical formulas to
  reduce the number of files required.
</p>
<p>
  Inside of your class/profession config, use the following syntax:
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          exp-curve-formula
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "min(100 + {level} * 50, 1000)"
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The
  <code>
    {level}
  </code>
  placeholder will be replaced by the target level number when calculating
  the required exp. This formula also supports PAPI placeholders. Basic math
  functions like
  <code>
    min
  </code>
  ,
  <code>
    max
  </code>
  ,
  <code>
    sqrt
  </code>
  ... are supported. If the formula happens to return a decimal number,
  it will be rounded down to the nearest integer.
</p>

## Exp Level Overflow

<p>
  If the player has more than the required amount of exp when reaching a
  new level, the remaining exp is kept and applied towards the next level.
  For this reason, a player can level up multiple times in one go, if provided
  with enough exp points.
</p>
