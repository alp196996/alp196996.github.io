# 📦 Maven

## Repository

<p>
  We provide a Maven repository with API builds for all MMO plugins. Add
  our repository to your repository list:
</p>
<div class="language-xml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    xml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          repository
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;phoenix&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          url
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;https://nexus.phoenixdevt.fr/repository/maven-public/&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          url
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          repository
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>

## Dependency

<p>
  Include the following dependency in your Maven
  <code>
    pom.xml
  </code>
</p>
<div class="language-xml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    xml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          dependency
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          groupId
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;net.Indyuce&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          groupId
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          artifactId
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;MMOCore-API&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          artifactId
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          version
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;1.13.1-SNAPSHOT&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          version
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          scope
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;provided&lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          scope
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &lt;/
        </span>
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          dependency
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
