var currentLang;
var lang_wrapper = `<div id="language-select-wrapper" style="padding-bottom: 15px;width: 100%;"   class="AIPRM__flex AIPRM__gap-3 lg:AIPRM__max-w-3xl md:last:AIPRM__mb-6 AIPRM__mx-2 AIPRM__pt-2 AIPRM__stretch AIPRM__justify-between AIPRM__text-sm AIPRM__items-end AIPRM__pb-2 AIPRM__mb-2 AIPRM__border-b AIPRM__flex-col sm:AIPRM__flex-row">
                                  <div class="AIPRM__flex AIPRM__w-full">
                                    <div style="float: left;display:flex">
                                      
                                      
                                      <div style="width:180px;border: 2px solid #28a47a;border-radius: 15px;">
                                        <div>  <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Language</span> </div>
                                        <div> 
                                        <select id="languageSelect" style="font-size: 14px;height: 25px;padding-top: 0px;padding-bottom: 0px;background: black;border: 0px;border-radius: 30px;width:100%;box-shadow:none;" class="AIPRM__bg-gray-100 AIPRM__border-0 AIPRM__text-sm AIPRM__rounded AIPRM__block AIPRM__w-full dark:AIPRM__bg-gray-600 dark:AIPRM__border-gray-600 dark:hover:AIPRM__bg-gray-900 dark:AIPRM__placeholder-gray-400 dark:AIPRM__text-white hover:AIPRM__bg-gray-200 focus:AIPRM__ring-0">
                                        <option value="English" selected>English </option> 
                                        <option value="Spanish" >Spanish </option> 
                                        <option value="French" >French </option> 
                                        <option value="German" >German </option> 
                                        <option value="Italian" >Italian </option> 
                                        <option value="Portuguese" >Portuguese </option> 
                                        <option value="Dutch" >Dutch </option> 
                                        <option value="Russian" >Russian </option> 
                                        <option value="Chinese" >Chinese </option> 
                                        <option value="Japanese" >Japanese </option> 
                                        <option value="Korean" >Korean </option> 
                                        <option value="Arabic" >Arabic </option> 
                                        <option value="Hindi" >Hindi </option> 
                                        <option value="Bengali" >Bengali </option> 
                                        <option value="Turkish" >Turkish </option> 
                                        <option value="Polish" >Polish </option> 
                                        <option value="Romanian" >Romanian </option> 
                                        <option value="Ukrainian" >Ukrainian </option> 
                                        <option value="Vietnamese" >Vietnamese </option> 
                                        <option value="Indonesian" >Indonesian </option> 
                                        <option value="Swedish" >Swedish </option> 
                                        <option value="Danish" >Danish </option> 
                                        <option value="Norwegian" >Norwegian </option> 
                                        <option value="Finnish" >Finnish </option> 
                                        <option value="Czech" >Czech </option> 
                                        <option value="Greek" >Greek </option> 
                                        <option value="Hebrew" >Hebrew </option> 
                                        <option value="Thai" >Thai </option> 
                                        

                                        

                                      
                                        </select>
                                        </div>

                                        </div>
                                     
                                    </div>
                                    
                                    <div class="AIPRM__ml-2" style="float: left;padding-left: 20px;padding-right: 20px;">
                                    <div style="float: left;display:flex">
                                      
                                      
                                      <div style="width:180px;border: 2px solid #28a47a;border-radius: 15px;">
                                        <div>  <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Tone</span> </div>
                                        <div> 
                                        <select id="toneSelect" style="font-size: 14px;height: 25px;padding-top: 0px;padding-bottom: 0px;background: black;border: 0px;border-radius: 30px;width:100%;box-shadow:none;" class="AIPRM__bg-gray-100 AIPRM__border-0 AIPRM__text-sm AIPRM__rounded AIPRM__block AIPRM__w-full dark:AIPRM__bg-gray-600 dark:AIPRM__border-gray-600 dark:hover:AIPRM__bg-gray-900 dark:AIPRM__placeholder-gray-400 dark:AIPRM__text-white hover:AIPRM__bg-gray-200 focus:AIPRM__ring-0">
                                                <option value="Formal">
                                                Formal
                                                </option> 

                                                <option value="Informal"> Informal </option>
                                                <option value="Conversational"> Conversational </option>
                                                <option value="Persuasive"> Persuasive </option>
                                                <option value="Instructional"> Instructional </option>
                                                <option value="Empathetic"> Empathetic </option>
                                                <option value="Authoritative"> Authoritative </option>
                                                <option value="Humorous"> Humorous </option>
                                                <option value="Sarcastic">Sarcastic </option>
                                                <option value="Cynical"> Cynical </option>
                                                <option value="Sympathetic"> Sympathetic </option>
                                                <option value="Diplomatic"> Diplomatic </option>
                                                <option value="Technical"> Technical </option>
                                                <option value="Inspirational"> Inspirational </option>
                                                <option value="Apologetic"> Apologetic </option>
  
                                        </select>
                                        </div>

                                        </div>
                                     
                                    </div>  
                                    
                                  
                                    </div>
                              
                                    <div class="AIPRM__ml-2">

                                    <div style="float: left;display:flex">
                                      
                                      
                                    
                                    
                                     
                                    </div>
                                  </div>
                              
                                  
                                </div>`