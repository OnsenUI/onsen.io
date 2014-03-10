---
encoding: 'utf8'
---

*index.html*

	<ons-navigator title="Grid">
	    <ons-scroller>
	      <div style="padding: 10px">
	      <h3>Equally spaced</h3>
	      <ons-row>
	        <ons-col>Col</ons-col>
	        <ons-col>Col</ons-col>
	      </ons-row>

	      <p></p>

	      <ons-row>
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	      </ons-row>

	      <p></p>
	      <ons-row>
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	      </ons-row>


	      <h3>Full height</h3>

	      <ons-row>
	        <ons-col>
	          <div class="Demo">
	            This column's height will grow to the same height as the tallest column.
	          </div>
	        </ons-col>

	        <ons-col>
	          <div class="Demo">
	            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis velit non gravida venenatis. Praesent consequat lectus purus, ut scelerisque velit condimentum eu.
	          </div>
	        </ons-col>
	      </ons-row>

	      <h3>Individual Sizing</h3>

	      <ons-row>
	        <ons-col size="50">Col size="50"</ons-col> 
	        <ons-col>Col</ons-col> 
	        <ons-col>Col</ons-col> 
	      </ons-row>

	      <p></p>
	      <ons-row>
	        <ons-col>
	          <div class="Demo">Col</div>
	        </ons-col>
	        <ons-col size="33">
	          <div class="Demo">Col size="33"</div>
	        </ons-col>
	      </ons-row>

	      <p></p>
	      <ons-row>
	        <ons-col size="25">
	          <div class="Demo">Col size="25"</div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">Col</div>
	        </ons-col>
	        <ons-col size="33">
	          <div class="Demo">Col size="33</div>
	        </ons-col>
	      </ons-row>


	      <h2>Alignment Features</h2>

	      <h3>Top-aligned Grid Cells</h3>

	      <ons-row align="top">
	        <ons-col>
	          <div class="Demo">
	            This cell should be top-aligned.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">          
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	            tempor incididunt ut labore et dolore magna aliqua.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">
	            This cell should be top-aligned.
	          </div>
	        </ons-col>
	      </ons-row>

	      
	      <h3>Bottom-aligned Grid Cells</h3>
	      <ons-row align="bottom">
	        <ons-col>
	          <div class="Demo">
	            This cell should be bottom-aligned.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	            tempor incididunt ut labore et dolore magna aliqua.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">
	            This cell should be bottom-aligned.
	          </div>
	        </ons-col>
	      </ons-row>

	      <h3>Vertically Centered Grid Cells</h3>

	      <ons-row align="center">
	        <ons-col>
	          <div class="Demo">
	            This cell should be vertically-centered with the cell to its right.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	            tempor incididunt ut labore et dolore magna aliqua.</div>
	        </ons-col>
	      </ons-row>

	      <h3>Mixed Vertical Alignment</h3>
	      <ons-row>
	        <ons-col align="top">
	          <div class="Demo">
	            This cell should be top aligned.
	          </div>
	        </ons-col>
	        <ons-col>
	          <div class="Demo">
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	              tempor incididunt ut labore et dolore magna aliqua.  
	          </div>
	        </ons-col>
	        <ons-col align="center">
	          <div class="Demo">
	            This cell should be center-aligned.
	          </div>
	        </ons-col>
	        <ons-col align="bottom">
	          <div class="Demo">
	            This cell should be bottom-aligned.
	          </div>
	        </ons-col>
	      </ons-row>
	    </div>
	        
	    </ons-scroller>

	</ons-navigator>